// Code
export const STANDARD_BUTTON_VARIABLE_CODE = `// Modules

interface StandardButtonVariantProps {
  title?: string;
}

const StandardButtonVariant: React.FC<StandardButtonVariantProps> = ({ title = 'Button' }) => {
  return (
    <div>
      <button className="bg-white border-2 px-5 py-1 rounded-xl hover:cursor-pointer hover:bg-black hover:text-white duration-300 transition-all">
        {title}
      </button>
    </div>
  );
};

export default StandardButtonVariant;
`;
