import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

import React from "react";

type CardProps = React.ComponentProps<typeof Card>

export function BodyComponent({ className, ...props }: CardProps){
    return(
        <div className='px-10 pt-5'>
            <Card>
                <CardHeader>
                    <CardTitle>FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Are you open to freelance jobs?</AccordionTrigger>
                            <AccordionContent>
                                It depends on the complexity of the job as I currently have a full time job.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>

            </Card>
        </div>
    )
}