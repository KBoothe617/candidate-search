import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [results, setResxults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    avatar_url: null,
    name: null,
    location: null,
    bio: null,
    company: null,
  });

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
