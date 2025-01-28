'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const personalityQuiz = [
  {
    question: 'What makes you uniquely you?',
    options: [
      'Your infectious laughter',
      'Your caring heart',
      'Your creative mind',
      'Your determination'
    ],
  },
  {
    question: 'What quality do others admire most about you?',
    options: [
      'Your ability to light up any room',
      'Your unwavering loyalty',
      'Your inspiring ambition',
      'Your genuine kindness'
    ],
  },
  {
    question: 'What superpower would suit you best?',
    options: [
      'Spreading joy wherever you go',
      'Healing hearts with kindness',
      'Making dreams come true',
      'Creating beautiful moments'
    ],
  },
];

const knowledgeQuiz = [
  {
    question: 'What is my favorite thing about spending time with you?',
    options: [
      'Our endless conversations',
      'Your contagious smile',
      'The comfortable silence',
      'All of the above'
    ],
    correctAnswer: 3,
  },
  {
    question: 'What do I always say about you?',
    options: [
      'You make everything better',
      'You inspire me',
      'You are amazing',
      'All of these'
    ],
    correctAnswer: 3,
  },
];

export function Quizzes() {
  const [activeQuiz, setActiveQuiz] = useState<'personality' | 'knowledge' | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleStartQuiz = (type: 'personality' | 'knowledge') => {
    setActiveQuiz(type);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion === (activeQuiz === 'personality' ? personalityQuiz.length - 1 : knowledgeQuiz.length - 1)) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuizContent = () => {
    if (showResults) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {activeQuiz === 'personality' 
              ? "You're absolutely perfect just the way you are! ❤️"
              : `You got ${answers.filter((a, i) => a === knowledgeQuiz[i].correctAnswer).length} out of ${knowledgeQuiz.length} right!`}
          </h3>
          <button
            onClick={() => setActiveQuiz(null)}
            className="px-6 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors"
          >
            Try Another Quiz
          </button>
        </motion.div>
      );
    }

    const currentQuizData = activeQuiz === 'personality' 
      ? personalityQuiz[currentQuestion]
      : knowledgeQuiz[currentQuestion];

    return (
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-center mb-8">
          {currentQuizData.question}
        </h3>
        <div className="grid gap-4">
          {currentQuizData.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(index)}
              className="p-4 bg-white/80 rounded-xl text-left hover:bg-white/90 transition-colors"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl handwritten text-center mb-12 gradient-text"
      >
        Fun Quizzes
      </motion.h2>

      {!activeQuiz ? (
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <QuizCard
            icon={Heart}
            title="What I Think About You"
            description="A collection of thoughts about your wonderful personality"
            onClick={() => handleStartQuiz('personality')}
          />
          <QuizCard
            icon={Star}
            title="What You Think About Me"
            description="Test your knowledge about what I think of our friendship"
            onClick={() => handleStartQuiz('knowledge')}
          />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white/90 p-8 rounded-2xl shadow-lg">
          {renderQuizContent()}
        </div>
      )}
    </section>
  );
}

function QuizCard({
  icon: Icon,
  title,
  description,
  onClick,
}: {
  icon: any;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 text-left"
    >
      <Icon className="w-8 h-8 text-pink-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.button>
  );
}