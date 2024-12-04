import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
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

  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const searchForSpecificUser = async (user: string) => {
    const data: Candidate = await searchGithubUser(user);
    setCurrentUser(data);
  };

  const searchForUsers = async (query: string) => {
    const data: Candidate[] = await searchGithub();
    setResults(data);
    await searchForSpecificUser(data[currentIdx].login || '');
  };

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
