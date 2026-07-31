import { useState } from "react";

export default function TagInput() {
  const [tag, settags] = useState(["react", "Node.js", "mongo.DB"]);
  const [inputvalue, setinputvalue] = useState("");
  // State to trigger the visual shake animation
  const [shake, setShake] = useState(false);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500); // Reset after animation finishes
  };

  const add_item = () => {
    const cleanedInput = inputvalue.trim().toLowerCase();

    if (cleanedInput === "") return;

    // 1. Check for max limit
    if (tag.length >= 5) {
      triggerShake();
      return;
    }

    // 2. Check for duplicate tags (case-insensitive check)
    const isDuplicate = tag.some(t => t.toLowerCase() === cleanedInput);
    if (isDuplicate) {
      triggerShake();
      return;
    }

    // Add the tag if all validations pass (keeping original casing)
    settags((prevtag) => [...prevtag, inputvalue.trim()]);
    setinputvalue("");
  };

  const remove_item = (indexToRemove) => {
    settags((prevtag) => prevtag.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      add_item();
    }
  };

  return (
    <div 
      // 3. Conditional shake styling applied directly to container
      className={`border border-zinc-700 rounded-lg p-3 bg-zinc-900 min-h-[52px] flex flex-wrap items-center gap-2 transition-all duration-300 ${
        shake ? "animate-shake border-red-500 ring-2 ring-red-500/20" : ""
      }`}
    >
      {tag.map((item, index) => (
        <span
          className="px-3 py-1 rounded-full bg-indigo-600 text-sm text-white flex items-center gap-2"
          key={index}
        >
          {item}
          <button 
            onClick={() => remove_item(index)} 
            className="hover:text-red-400 font-bold transition-colors"
          >
            ×
          </button>
        </span>
      ))}

      <span className="flex items-center gap-2">
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={tag.length >= 5}
          placeholder={tag.length >= 5 ? "Limit reached (5/5)" : "Add tags..."}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-white placeholder-zinc-500 border-b border-zinc-600 focus:border-white disabled:opacity-40"
        />
        <button
          className="text-zinc-400 hover:text-white px-1 font-bold disabled:opacity-20"
          onClick={add_item}
          disabled={tag.length >= 5}
        >
          +
        </button>
      </span>
    </div>
  );
}
