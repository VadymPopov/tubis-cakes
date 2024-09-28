import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import clsx from 'clsx';

interface IAccordionItem {
  question: string;
  answer: string;
  id: number;
  isOpen: boolean;
  handleClick: (_id: number) => void;
}

export default function AccordionItem({
  question,
  answer,
  id,
  isOpen,
  handleClick,
}: IAccordionItem) {
  return (
    <li
      className={clsx(
        'p-4 transition-all duration-300 ease-in-out cursor-pointer rounded-lg border border-accentColor bg-primary',
      )}
      onClick={() => handleClick(id)}
    >
      <div className="flex items-center justify-between">
        <span className="font-bold leading-6 tracking-[-0.3px] text-sm sm:text-base">
          {question}
        </span>
        {isOpen ? (
          <FaAngleDown className=" text-accentColor ml-2.5 w-5 h-5" />
        ) : (
          <FaAngleUp className=" text-accentColor ml-2.5 w-5 h-5" />
        )}
      </div>

      <div
        className={clsx(
          'transition-max-height overflow-hidden duration-300 ease-in-out',
          isOpen ? 'max-h-[200px]' : 'max-h-0',
        )}
      >
        <p className="p-4 font-medium leading-6 tracking-[-0.3px] text-sm sm:text-base">
          {answer}
        </p>
      </div>
    </li>
  );
}
