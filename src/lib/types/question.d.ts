declare type Answer = {
  answer: string;
  key: string;
};
declare type Question = {
  answers: Answer[];
  type: string;
  _id: string;
  question: string;
  correct: string;
  subject: null;
  exam: {
    _id: string;
    title: string;
    duration: number;
    subject: string;
    numberOfQuestions: number;
    active: boolean;
    createdAt: string;
  };
  createdAt: string;
};
