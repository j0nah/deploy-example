"use client"

import { useEffect, useState } from "react";
import { getGreeting } from "./actions";

export default function Home() {
  const [greeting, setGreeting] = useState("Loading...");
  
  useEffect(() => {
    const fetchGreeting = async () => {
      const response = await getGreeting();
      if(response){
        setGreeting(response);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {greeting}, from {process.env.NEXT_PUBLIC_GREETING_ENVIRONMENT}
    </main>
  )
}


