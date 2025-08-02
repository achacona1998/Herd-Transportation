export const FAQItem = ({ question, answer }) => (
  <div className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] flex flex-col justify-between p-4 sm:p-5 rounded-xl border border-[#CFB53B] text-white">
    <h3 className="mb-2 text-lg sm:text-xl font-bold tracking-tight">{question}</h3>
    <p className="text-sm sm:text-base font-normal">{answer}</p>
  </div>
);
