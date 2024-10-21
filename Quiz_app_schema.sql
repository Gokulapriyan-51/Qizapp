CREATE DATABASE quiz_app;

USE quiz_app;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('teacher', 'student') NOT NULL
);

CREATE TABLE quizzes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  teacher_id INT,
  FOREIGN KEY (teacher_id) REFERENCES users(id)
);

CREATE TABLE questions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  quiz_id INT,
  question_text TEXT NOT NULL,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);

CREATE TABLE options (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question_id INT,
  option_text TEXT NOT NULL,
  is_correct BOOLEAN,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE student_quizzes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  quiz_id INT,
  score INT,
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);

CREATE TABLE student_answers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_quiz_id INT,
  question_id INT,
  option_id INT,
  FOREIGN KEY (student_quiz_id) REFERENCES student_quizzes(id),
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (option_id) REFERENCES options(id)
);

--insert queries for initial config

-- Insert users
INSERT INTO users (id, username, email, password, role) 
VALUES
(1, 'Gokul', 'gokul@gmail.com', 'password123', 'teacher'),
(2, 'Gokulapriyan', 'gokulapriyan1072001@gmail.com', 'password123', 'teacher'),
(3, 'Arul', 'arul@gmail.com', 'password123', 'student'),
(4, 'John', 'john@gmail.com', 'password123', 'student');

-- Insert quizzes
INSERT INTO quizzes (id, title, description, teacher_id) 
VALUES
(1, 'Math Quiz', 'Basic math concepts', 1),
(2, 'Science Quiz', 'Biology and chemistry', 3),
(3, 'History Quiz', 'World history', 1);

-- Insert questions
INSERT INTO questions (id, quiz_id, question_text) 
VALUES
(1, 1, 'What is 2 + 2?'),
(2, 1, 'What is 5 * 5?'),
(3, 2, 'What is the capital of France?'),
(4, 2, 'What is the largest planet in our solar system?'),
(5, 3, 'Who was the first president of the United States?');

-- Insert options
INSERT INTO options (id, question_id, option_text, is_correct) 
VALUES
(1, 1, '4', 1),
(2, 1, '5', 0),
(3, 1, '6', 0),
(4, 1, '7', 0),
(5, 2, '25', 1),
(6, 2, '20', 0),
(7, 2, '30', 0),
(8, 2, '35', 0),
(9, 3, 'Paris', 1),
(10, 3, 'London', 0),
(11, 3, 'Berlin', 0),
(12, 3, 'Rome', 0),
(13, 4, 'Jupiter', 1),
(14, 4, 'Earth', 0),
(15, 4, 'Saturn', 0),
(16, 4, 'Mars', 0),
(17, 5, 'George Washington', 1),
(18, 5, 'Thomas Jefferson', 0),
(19, 5, 'Abraham Lincoln', 0),
(20, 5, 'Benjamin Franklin', 0);
