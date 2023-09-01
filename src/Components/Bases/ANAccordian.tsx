import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type {ANAccordianProps} from "@anTypes/others.ts";
import {FC, useState} from "react";
const ANAccordian: FC<ANAccordianProps> = (props) => {
    const {title, children} = props;
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    const openAccordian = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <Accordion expanded={isExpanded}
                       onChange={openAccordian}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        component="span"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default ANAccordian;