import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '@/components/ui/container';
import TypographyH2 from '@/components/ui/typography-h2';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface FrequentlyAskedQuestionsProps {
  question: string;
  answer: string;
}

const frequentlyAskedQuestions: FrequentlyAskedQuestionsProps[] = [
  {
    question: 'What is the typical timeline for setting up web analytics?',
    answer:
      'The setup time can vary depending on the complexity of the website and the specific analytics tools being implemented. Typically, basic setups can take a few days, while more complex integrations might take several weeks.',
  },
  {
    question: 'How much does it cost to integrate analytics into my website?',
    answer:
      "Costs can vary widely based on the scope of the project. It's best to discuss your specific needs to provide an accurate estimate. We offer competitive rates and can work with a variety of budgets.",
  },
  {
    question: 'Do I need to have technical skills to manage web analytics?',
    answer:
      'While having some technical knowledge is helpful, our team can handle the technical aspects of analytics setup and provide you with easy-to-understand reports and insights.',
  },
  {
    question: 'How can web analytics improve my marketing strategy?',
    answer:
      'Web analytics provide valuable insights into user behavior, allowing you to make data-driven decisions, optimize your marketing campaigns, and improve your ROI.',
  },
  {
    question: 'Can you integrate analytics with my existing marketing tools?',
    answer:
      'Yes, we can seamlessly integrate analytics with your existing marketing tools to provide a holistic view of your digital performance.',
  },
  {
    question: 'How do you ensure data accuracy in web analytics?',
    answer:
      'We conduct thorough audits and implement best practices to ensure that your analytics data is accurate and reliable.',
  },
  {
    question: 'What kind of support do you offer after analytics setup?',
    answer:
      'We provide ongoing support, including monitoring, optimization, and regular updates to keep your analytics setup aligned with your business goals.',
  },
  {
    question: 'Can web analytics help me understand my audience better?',
    answer:
      "Absolutely. Web analytics provide detailed insights into your audience's demographics, interests, and behaviors, helping you tailor your content and marketing strategies to better meet their needs.",
  },
  {
    question: 'How often should I review my web analytics data?',
    answer:
      "It's recommended to review your analytics data regularly, at least monthly, to monitor performance, identify trends, and make informed adjustments to your strategies.",
  },
  {
    question: 'Can you help with conversion tracking and optimization?',
    answer:
      'Yes, we specialize in setting up conversion tracking and providing recommendations for optimization to improve your conversion rates and overall website performance.',
  },
];

export function FrequentlyAskedQuestions() {
  return (
    <Container>
      <TypographyH2 className='text-center'>
        Do You Believe Us Now?
        <span className='text-primary'>Book A Call Below</span>
        To Talk About Fixing Your Tracking.
      </TypographyH2>

      <Link href='/contact'>
        <Button className='px-10 py-4 w-full'>Book A Call</Button>
      </Link>

      <Accordion type='single' collapsible className='w-full'>
        {frequentlyAskedQuestions.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Link href='/contact'>
        <Button className='px-10 py-4 w-full'>Book A Call</Button>
      </Link>
    </Container>
  );
}

export default FrequentlyAskedQuestions;