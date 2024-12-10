// import candidate interface SavedCandidate and react
import { Candidate } from "../interfaces/Candidate.interface";
import SavedCandidate from "./SavedCandidate";
import { useEffect, useState } from "react";

// map over savedCandidates in local storage
// render SavedCandidate card for each candidate
const SavedCandidateList = () => {
    const [newCandidate, setCandidate] = useState<Candidate[]>(
        []
    );

    useEffect(() => {
        const savedCandidates = localStorage.getItem('savedCandidates');
        let candidates: Candidate[] = [];
        if (typeof savedCandidates === 'string') {
          candidates = JSON.parse(savedCandidates);
        }
        setCandidate(candidates);
      }, []);

      const reject = (id: number) => {
        let parsedCandidates: Candidate[] = [];
        const savedCandidates = localStorage.getItem('savedCandidates');
        if (typeof savedCandidates === 'string') {
          parsedCandidates = JSON.parse(savedCandidates);
        }
        parsedCandidates = parsedCandidates.filter(
          (person: Candidate) => person.id !== id
        );
        localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
        setCandidate(parsedCandidates);
      };
      
      return (
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {newCandidate.map((candidate) => (
              <SavedCandidate
                key={candidate.id}
                candidate={candidate}
                rejectedCandidate={reject}
              />
            ))}
          </tbody>
        </table>
      );
    };
    
    export default SavedCandidateList;