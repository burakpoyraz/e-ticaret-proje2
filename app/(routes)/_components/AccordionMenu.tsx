import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sss } from "@/constans";

const AccordionMenu = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      { sss.map((item) => (
        <AccordionItem value={item.id}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>
          {item.description}
        </AccordionContent>
      </AccordionItem>
    
        
        
        
        ))}
    </Accordion>
  );
};

export default AccordionMenu;
