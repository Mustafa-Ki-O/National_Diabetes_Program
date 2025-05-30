import { jsPDF } from "jspdf";
import { NotoFontBase64 } from "./NotoBase64";
const loadFont = () => {
  jsPDF.API.events.push(["addFonts", function () {
    this.addFileToVFS("NotoSansArabic.ttf", NotoFontBase64);
    this.addFont("NotoSansArabic.ttf", "NotoSansArabic", "normal");
  }]);
};

export default loadFont;
