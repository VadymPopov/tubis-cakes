'use client';

import AccordionItem from '@/app/components/AccordionItem';
import Button from '@/app/components/Button';
import SearchBar from '@/app/components/SearchBar';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I place an order for a custom cake?',
    answer:
      "To order a custom cake, fill out the form on our website or send us an email at info@tubiscakes.com. We'll guide you through the process to ensure your vision comes to life.",
  },
  {
    question: 'How much do custom cakes cost?',
    answer:
      'Our custom cakes start at $200. Each cake is unique, and pricing varies based on design, size, and complexity.',
  },
  {
    question: 'How much notice is required for orders?',
    answer:
      'We require 48 hours notice for standard orders. For custom cakes, please provide at least two weeks notice to ensure we can dedicate the time needed for your creation.',
  },
  {
    question: 'What kind of cream do you use?',
    answer:
      'We use traditional American buttercream for all our cakes to ensure the highest quality and taste.',
  },
  {
    question: 'Do you make Gluten-Free or Vegan cakes?',
    answer:
      'We offer gluten-free, vegan, egg-free, dairy-free, keto, and nut-free cakes. However, we currently do not provide vegan cake options.',
  },
  {
    question: 'Do you make desserts other than cakes?',
    answer:
      'Yes, we also offer a variety of desserts including cupcakes, cake pops, cookies, macarons, rice krispie treats, brownies, donuts, muffins, tiramisu, strawberry shortcake, cheesecake, banana pudding, cake truffles, cakesicles, and more.',
  },
];

interface IFAQ {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<IFAQ[]>(faqs);
  const [areAllOpen, setAreAllOpen] = useState(false);

  const filterData = (searchTerm: string) => {
    setData(
      faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  };

  const handleClick = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
      setAreAllOpen(true);
    }
  };

  const handleChange = (searchTerm: string) => {
    setQuery(searchTerm);
    filterData(searchTerm);
  };

  const toggleAll = () => {
    if (areAllOpen) {
      setOpenIndices([]);
    } else {
      setOpenIndices(data.map((_, index) => index));
    }
    setAreAllOpen(!areAllOpen);
  };

  return (
    <div className="bg-secondary px-3 py-8 sm:px-4 sm:py-10 lg:px-10 lg:py-16 xl:px-16">
      {' '}
      <div className="md:m-auto mx-5 my-10 flex max-w-[700px] flex-col gap-4 md:my-20">
        <h2 className="font-bold text-base sm:text-xl">Search</h2>
        <div className="flex justify-between items-center mb-10">
          <SearchBar query={query} onSearch={handleChange} />
          <Button
            type="button"
            onClick={toggleAll}
            label={`${areAllOpen ? 'Hide' : 'Show'} all`}
          />
        </div>
        <h2 className="font-bold text-base sm:text-xl">FAQ&apos;s</h2>
        {data.length > 0 ? (
          <ul className="flex flex-col gap-5">
            {data.map((faq, index) => {
              const { question, answer } = faq;
              return (
                <AccordionItem
                  key={index}
                  question={question}
                  answer={answer}
                  id={index}
                  isOpen={openIndices.includes(index)}
                  handleClick={handleClick}
                />
              );
            })}
          </ul>
        ) : (
          <div className="min-h-[700px] m-auto text-xl p-20">
            <p>Nothing found for {query} </p>
          </div>
        )}
      </div>
    </div>
  );
}
