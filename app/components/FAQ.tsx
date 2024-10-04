'use client';

import AccordionItem from '@/app/components/AccordionItem';
import Button from '@/app/components/Button';
import SearchBar from '@/app/components/SearchBar';
import Title from '@/app/components/Title';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I secure my order?',
    answer:
      'After our quick consultation and you are satisfied with cake details, design, and quote, please e-transfer the half amount to tubiscakes.toronto@outlook.com. We also accept cash payments, where you will receive a 10% discount. Cash must be dropped off in person at our location. Your order is secure and confirmed after we confirm your payment.',
  },
  {
    question: 'How do I place an order for a custom cake?',
    answer:
      "To order a custom cake, fill out the form on our website or send us an email at info@tubiscakes.com. We'll guide you through the process to ensure your vision comes to life.",
  },
  {
    question: 'How much do your cakes cost?',
    answer:
      'All of our cakes are customized and made to order – this means that pricing is dependent on size, flavor, and design complexity. Please see the Pricing page for starting prices and serving sizes.',
  },
  {
    question: 'How much notice do you need for an order?',
    answer:
      'We recommend 2 weeks. Notice time may vary depending on the order size and custom details. Contact us and inquire if you need last minute cakes. Availabilities may also vary.',
  },
  {
    question: 'How much do custom cakes cost?',
    answer:
      'Our custom cakes start at $200. Each cake is unique, and pricing varies based on design, size, and complexity.',
  },
  {
    question: 'Do you cater?',
    answer:
      'Due to the high volume of orders, we require at least 2 months advance notice for the request. For more specific details, catering prices, and deposit requirements, please contact us directly.',
  },
  {
    question: 'Do you make Gluten-Free or Vegan cakes?',
    answer:
      'We offer gluten-free, vegan, egg-free, dairy-free, keto, and nut-free cakes. However, we currently do not provide vegan cake options.',
  },
  {
    question: 'How about Pick Up and Delivery?',
    answer:
      'Pick up: Please book a 15 mins time slot for your pickup. Inform us 1 hour prior to arrival for final packaging. Delivery: Yes, delivery is subject to availability. Pricing starts at $25 based on distance.',
  },
  {
    question: 'What kind of cream do you use?',
    answer:
      'The best cakes require the finest ingredients. At Tubi’s Cakes, we use traditional Swiss Meringue buttercream or Custard cream (European style) on all our creations.',
  },
  {
    question: 'Do I need to refrigerate my cake?',
    answer:
      'Cakes, cupcakes, and macarons should be brought to room temperature about 45min to 1 hour before serving for the best taste. Leftovers will keep for about 5 days in an airtight container.',
  },
  {
    question: 'Where are you located?',
    answer:
      'Tubi’s Cakes is a custom cake studio based in Mimico area, by Lake Shore Blvd. and Superior Ave. We are a boutique operation without a storefront, where every product/service is highly customized and always made to order.',
  },
  {
    question: 'I am allergic to nuts!',
    answer:
      'Although we are not a 100% nut-free facility, we take allergies very seriously. Please ensure to indicate any allergies on the order form! We sanitize our work area prior to each production.',
  },
  {
    question: 'Do you offer cake tastings?',
    answer:
      'Yes! Cake tastings are available upon request. Please email or use the contact form for further information about our cake tastings.',
  },
  {
    question: 'Do you make desserts other than cakes?',
    answer:
      'Yes, we also offer desserts including cupcakes, cake pops, cookies, macarons, rice krispie treats, brownies, donuts, muffins, tiramisu, strawberry shortcake, cheesecake, banana pudding, cake truffles, cakesicles, and more.',
  },
  {
    question: 'Can my florist decorate the cake?',
    answer:
      'Due to food safety and insurance reasons, only the Tubi’s Cakes team is permitted to dress the cake. We are happy to work with your florist to supply the florals for the cake prior to the event.',
  },
  {
    question: 'Are your cakes fondant or buttercream cakes?',
    answer:
      'We do both Fondant and Buttercream cakes! All of our custom cakes are either filled and covered in buttercream or draped in fondant, depending on the client’s request.',
  },
  {
    question: 'Can I keep the fondant figures?',
    answer:
      'Yes! Fondant figures can be saved as keepsakes if stored properly in a cool and dry place. They can also be frozen in an airtight container to avoid condensation when defrosting.',
  },
  {
    question: 'What ingredients do you use?',
    answer:
      'All Cake: AP flour, cake flour, eggs, sugar, cocoa powder, baking powder, baking soda, salt, espresso powder, whole milk, lemon juice, sunflower oil, vanilla extract, vanilla, butter (may contain peanuts, tree nuts, milk, wheat, soya). Buttercream: Pasteurized eggs, sugar, butter, vanilla, salt, Belgian Chocolate. All products are halal and kosher.',
  },
  {
    question: 'Cancellation / Refund?',
    answer:
      'Due to the nature of the product (custom edible goods), we have a 100% no return or cancellation policy once the payment has been made. If unhappy, please contact our customer service for assistance.',
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
    <div className="md:m-auto mx-5 my-10 flex max-w-[700px] flex-col gap-4 md:my-20">
      <Title level="h2" className="text-start mb-5">
        Search
      </Title>
      <div className="flex justify-between items-center mb-10">
        <SearchBar query={query} onSearch={handleChange} />
        <Button
          type="button"
          onClick={toggleAll}
          label={`${areAllOpen ? 'Hide' : 'Show'} all`}
        />
      </div>
      <Title level="h2" className="text-start mb-5">
        FAQ&apos;s
      </Title>
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
  );
}
