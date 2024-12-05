// import react icons and candidate interface
import { Candidate } from "../interfaces/Candidate.interface";
import { IoAddCircle, ioRemoveCircle } from "react-icons/io5";

// create candidate card component
type CandidateCardProps = {
    currentUser: Candidate;
    desision: (isSelected: boolean) => void;
};
