export const demoSlots=[
{service:"Scaling",doctor:"Dr. Narin",day:"Wednesday",time:"09:30"},
{service:"Scaling",doctor:"Dr. Narin",day:"Saturday",time:"10:00"},
{service:"Veneer consultation",doctor:"Dr. Mira",day:"Saturday",time:"11:00"},
{service:"Implant consultation",doctor:"Dr. Mira",day:"Friday",time:"13:30"},
{service:"Root canal consultation",doctor:"Dr. Arun",day:"Wednesday",time:"14:00"}
];
export const sampleFunnel=[{stage:"Ad inquiries",count:60},{stage:"Qualified leads",count:41},{stage:"Booking requests",count:26},{stage:"Attended visits",count:11}];
const faq=[
{source:"Sample veneer FAQ",terms:["veneer","veneers","วีเนียร์"],reply:"วีเนียร์มีหลายประเภทและค่าใช้จ่ายขึ้นอยู่กับวัสดุและจำนวนซี่ค่ะ กรุณานัดปรึกษาทันตแพทย์เพื่อประเมินและรับราคาที่ถูกต้อง (ข้อมูลสาธิต ไม่ใช่ราคาของคลินิกจริง)"},
{source:"Sample scaling FAQ",terms:["scaling","cleaning","ขูดหินปูน"],reply:"การขูดหินปูนช่วยทำความสะอาดคราบหินปูนค่ะ สามารถขอเวลานัดหมายเพื่อรับการตรวจประเมินโดยทันตแพทย์ได้ (ข้อมูลสาธิต)"},
{source:"Sample implant FAQ",terms:["implant","รากฟันเทียม"],reply:"การทำรากฟันเทียมต้องผ่านการตรวจและวางแผนโดยทันตแพทย์ค่ะ ระบบช่วยส่งคำขอนัดปรึกษาได้ แต่ไม่ประเมินความเหมาะสมทางการแพทย์"}
];
export function checkBooking(q){
 if(!q||!q.service||!q.doctor||!q.day||!q.time)return {ok:false,status:"REVIEW REQUIRED",message:"Missing appointment details; not confirmed."};
 let found=demoSlots.some(s=>Object.keys(s).every(k=>s[k]===q[k]));
 return found?{ok:true,status:"ELIGIBLE SLOT",message:"Fictional slot is eligible in this demonstration; no real booking is made."}:{ok:false,status:"NOT AVAILABLE",message:"This combination is not permitted in the fictional schedule; send for staff review."};
}
const urgent=/หน้าบวม|บวมมาก|หายใจลำบาก|กลืนลำบาก|ปวดมาก|เลือดไม่หยุด|severe pain|swelling|cannot breathe|difficulty breathing|uncontrolled bleeding/i;
const clinical=/ต้องถอน|ควรถอน|เป็นโรค|วินิจฉัย|ควรรักษา|need extraction|should i extract|diagnos/i;
const booking=/นัด|คิว|ว่างไหม|booking|appointment|available slot|schedule/i;
export function respondToPatient(text){
 const input=String(text||"").trim();
 if(!input)return {intent:"Unknown",risk:"medium",stage:"Staff review",source:null,confidence:0,reply:"กรุณาพิมพ์คำถาม หรือให้เจ้าหน้าที่ช่วยตรวจสอบค่ะ"};
 if(urgent.test(input))return {intent:"Urgent / clinical concern",risk:"high",stage:"Immediate human escalation",source:null,confidence:0,reply:"อาการที่แจ้งอาจต้องได้รับการประเมินโดยทันตแพทย์โดยเร็วค่ะ ระบบนี้ไม่สามารถวินิจฉัยได้ หากมีอาการรุนแรง หายใจหรือกลืนลำบาก โปรดขอรับการดูแลฉุกเฉินทันที"};
 if(clinical.test(input))return {intent:"Clinical decision",risk:"high",stage:"Dentist review",source:null,confidence:0,reply:"คำถามนี้ต้องให้ทันตแพทย์ประเมินเป็นรายบุคคลค่ะ ระบบจะส่งต่อให้เจ้าหน้าที่ช่วยประสานนัดตรวจ โดยยังไม่มีการยืนยันนัดหมาย"};
 if(booking.test(input))return {intent:"Appointment inquiry",risk:"low",stage:"Booking request",source:null,confidence:0,reply:"ยินดีช่วยตรวจสอบเงื่อนไขการนัดหมายค่ะ กรุณาระบุประเภทบริการและช่วงเวลาที่สะดวก ระบบสาธิตนี้ไม่ได้ยืนยันนัดหมายจริง"};
 const match=faq.find(f=>f.terms.some(term=>input.toLowerCase().includes(term.toLowerCase())));
 if(match)return {intent:"Routine treatment information",risk:"low",stage:"Qualified inquiry",source:match.source,confidence:100,reply:match.reply};
 return {intent:"Unknown / unsupported",risk:"medium",stage:"Staff review",source:null,confidence:0,reply:"ขอบคุณสำหรับคำถามค่ะ ตอนนี้ยังไม่มีข้อมูลที่คลินิกอนุมัติไว้ในตัวอย่างนี้ ขอส่งต่อให้เจ้าหน้าที่ตรวจสอบก่อนนะคะ"};
}
