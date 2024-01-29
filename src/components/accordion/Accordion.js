import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function _Accordion({ title, text, className, posts }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        // "non-closing" FAQs
        !posts
            ?
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={className}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {text}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            :
            // "closing" FAQs: after each FAQ clicked, previous FAQ will be closed
            posts.map(({ title, text }, ind) => (
                <div>
                    <Accordion expanded={expanded === ind} onChange={handleChange(ind)} className={className}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {text}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))
    );
}