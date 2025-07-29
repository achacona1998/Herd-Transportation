export const FAQItem = ({ question, answer }) => (
  <div className="bg-green-100 flex flex-col justify-between p-5 rounded-xl  border border-[#CFB53B]">
    <h3 className="mb-2 text-xl font-bold tracking-tight">{question}</h3>
    <p className="font-normal text-gray-700">{answer}</p>
  </div>
);
