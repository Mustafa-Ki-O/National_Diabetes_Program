import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import PostAdmin from "../api/Admin/PostAdmin"; // تأكد من أن المسار صحيح

// ✅ توليد بيانات فريدة
const generateFakePatients = (count = 500) => {
  const usedNames = new Set();
  const usedEmails = new Set();
  const usedCities = new Set();

  const patients = [];

  while (patients.length < count) {
    const name = faker.company.name(); // استخدم اسم الشركة إذا كنت تمثل مراكز
    const email = faker.internet.email(name.split(" ")[0]);
    const city = faker.location.city();

    if (usedNames.has(name) || usedEmails.has(email) || usedCities.has(city)) {
      continue; // تخطَّ العناصر المكررة
    }

    usedNames.add(name);
    usedEmails.add(email);
    usedCities.add(city);

    patients.push({
      centerName: name,
      centerEmail: email,
      centerCity: city,
      centerKey: '%Y4&F4@VAW&T2QLYD44M8Z1Y%',
      centerPassword: faker.internet.password(),
    });
  }

  return patients;
};

const TestPatientUploader = () => {
  const [status, setStatus] = useState("pending");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const uploadPatients = async () => {
      const patients = generateFakePatients(500);
      setStatus("uploading");

      let successCount = 0;

      for (let i = 0; i < patients.length; i++) {
        try {
          await PostAdmin(patients[i]);
          successCount++;
          setProgress(((successCount / patients.length) * 100).toFixed(1));
        } catch (err) {
          console.error(`❌ Failed to upload patient #${i + 1}:`, err.message);
        }
      }

      setStatus("done");
    };

    // uploadPatients();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">🧪 Test Upload Patients</h1>
      {status === "uploading" && <p>جارٍ رفع المرضى... Progress: {progress}%</p>}
      {status === "done" && <p>✅ تم رفع المرضى بنجاح!</p>}
      {status === "pending" && <p>⏳ جاري التحضير...</p>}

    </div>
  );
};

export default TestPatientUploader;
