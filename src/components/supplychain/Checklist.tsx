import { FiCheckCircle } from "react-icons/fi";

export default function Checklist() {
  const items = [
    "Bibendum accumsan commodo",
    "Volutpat consequat mauris nunc congue",
    "Bibendum accumsan commodo fermentum facilisis",
    "Rutrum tellus pellentesque eu tincidunt",
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-gray-100  shadow-md rounded-xl p-3 sm:p-4 hover:shadow-lg transition"
            >
              <FiCheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <p className="text-gray-800 text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
