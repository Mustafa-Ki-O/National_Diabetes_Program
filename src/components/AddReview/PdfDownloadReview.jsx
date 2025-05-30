import loadFont from "../general/LoadFont";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => {
    // تعامُل خاص مع مؤشرات المصفوفة مثل druges[0]
    const match = part.match(/(\w+)\[(\d+)\]/);
    if (match) {
      const [, arrKey, index] = match;
      return acc?.[arrKey]?.[index];
    }
    return acc?.[part];
  }, obj);
};

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
  const value = getNestedValue(reviewData, key);
  if (!value) return;

let valueText = '';
if (Array.isArray(value)) {
  if (value.length > 0 && typeof value[0] === 'object') {
    valueText = value.map((item, idx) => 
      Object.entries(item).map(
        ([k, v]) => `${k}: ${v || '—'}`
      ).join(', ')
    ).join('\n');
  } else {
    valueText = value.join(', ');
  }
} else if (typeof value === 'object') {
  valueText = Object.entries(value).map(
    ([k, v]) => `${k}: ${v || '—'}`
  ).join(', ');
} else {
  valueText = String(value);
}
  pdf.setFontSize(16);
  pdf.setTextColor(50, 50, 50); 
  const lines = pdf.splitTextToSize(`${label}: ${valueText}`, 170);
  if (y + lines.length * 12 > 270) {
    pdf.addPage();
    y = 50;
  }
  pdf.text(lines, rightMargin, y, { align: 'right' });
  y += lines.length * 12 + 6;
});

  });

  pdf.save(`المراجعة الخاصة بالمريض ${storedPatient.fullname}.pdf`);
};


export default downloadDataAsPDF