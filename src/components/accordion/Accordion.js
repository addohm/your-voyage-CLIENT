import * as React from 'react';
import AccordionBody from './AccordionBody';

export default function _Accordion({ title, text, className, posts }) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        // "non-closing" FAQs
        !posts
            ?
            <AccordionBody title={title} text={text} className={className} ind={0} expanded={expanded} handleChange={handleChange} />
            :
            // "closing" FAQs: after each FAQ clicked, previous FAQ will be closed
            posts.map(({ title, text }, ind) => (
                <AccordionBody title={title} text={text} className={className} ind={ind} expanded={expanded} handleChange={handleChange} />
            ))
    );
}