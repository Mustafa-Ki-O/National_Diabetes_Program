import loadFont from "../general/LoadFont";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const downloadDataAsPDF = (reviewData, sections, storedPatient) => {
  loadFont();
  console.log(reviewData)
  const pdf = new jsPDF();
  pdf.setFont('NotoSansArabic');

  let y = 20;
  const rightMargin = 180;

  // الصفحة الأولى: بيانات المريض فقط
  pdf.setFontSize(20);
  pdf.text(`المراجعة الخاصة بالمريض: ${storedPatient.id_number}`, 150, y, { align: 'right' });
  y += 12;
  pdf.text(`السيد/ة : ${storedPatient.fullname}`, 150, y, { align: 'right' });

  y+=80;

  Object.values(sections).forEach((section, index) => {
    if (index > 0) {
      pdf.addPage(); 
    }
    
    y = 50;
    pdf.setFontSize(22);
    pdf.text(section.title, rightMargin, y, { align: 'right' });
    y += 25;

    section.fields.forEach(({ label, key }) => {
      const value = reviewData[key];
      if (!value) return;
   let valueText = '';
   if (Array.isArray(value)) {
     if (key === 'treatments.druges') {
      valueText = value.map((drug, idx) => 
        `- ${idx + 1}) الاسم: ${drug.name || '—'}, الوحدات: ${drug.units || '—'}, الجرعات اليومية: ${drug.dosage_per_day || '—'}`
         ).join('\n');
       } else {
         valueText = value.join(', ');
       }
     } else if (typeof value === 'object') {
       valueText = Object.entries(value).map(
         ([k, v]) => `${k}: ${v}`
       ).join(', ');
     } else {
       valueText = String(value);
     }

      pdf.setFontSize(16);
      const lines = pdf.splitTextToSize(`${label}: ${valueText}`, 170); // التقطيع ليظهر داخل الصفحة
      pdf.text(lines, rightMargin, y, { align: 'right' });
      y += lines.length * 12;
    });
  });

  pdf.save(`المراجعة الخاصة بالمريض ${storedPatient.fullname}.pdf`);
};


export default downloadDataAsPDF