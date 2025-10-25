// Modules

interface LinkButtonVariantProps {
  title: string;
  url: string;
  target?:boolean;
  ariaLabel?: string;
  disabled?: boolean;
}

const LinkButtonVariant: React.FC<LinkButtonVariantProps> = ({
  title = 'Toggle',
  url = '#',
  target = false,
  ariaLabel,
  disabled = false,
}) => {

  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href={url}
        className=" text-lg bg-white rounded-xl px-4 py-2 border-dotted border-2 font-bold hover:border-solid hover:scale-110 hover:bg-black hover:text-white transition duration-250 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        target={target ? '_blank':'_self'}
      >
        {title}
      </a>
    </div>
  );
};

export default LinkButtonVariant;
