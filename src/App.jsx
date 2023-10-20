// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Survey from "./Survey";
import { surveyQuiz } from "./Quiz";

function App() {
  return (
    <div className="w-full h-screen justify-center bg-slate-500">
      <Survey questions={surveyQuiz.questions} />;
    </div>
  );
}

export default App;
