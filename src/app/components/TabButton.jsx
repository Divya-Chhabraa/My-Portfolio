const TabButton = ({ children, selectTab, active }) => {
  return (
    <button
      onClick={selectTab}
      className={`text-sm px-4 py-2 rounded-full border transition-all duration-300
        ${
          active
            ? "text-white border-purple-500 bg-[#2A2A40]"
            : "text-[#ADB7BE] border-[#33353F] hover:border-purple-500 hover:text-white"
        }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
