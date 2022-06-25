import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.scss";
import { Pagination } from "../common";

export const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [currentPage]);

  const loadQuestions = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10", {
        "Content-Type": "application/json",
      })
      .then((res) => {
        if (res.data.response_code === 0) {
          setQuestions(res.data.results);
        } else {
          setQuestions([]);
        }
      })
      .catch((err) => {
        console.log("getting error...", { err });
      });
  };

  const onPageChange = (val) => {
    setCurrentPage(val);
  };

  return (
    <div className="home">
      <div className="title">Browse Questions</div>
      <div className="table-container">
        <table>
          <thead>
            <th>ID</th>
            <th>Category</th>
            <th>Type</th>
            <th>Difficulty</th>
            <th>Question / Statement</th>
            <th>Correct Answer</th>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{question.category}</td>
                <td>{question.type}</td>
                <td>{question.difficulty}</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: question.question }}
                  />
                </td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: question.correct_answer,
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <Pagination
            totalCount={100}
            currentPage={currentPage}
            onPageChange={onPageChange}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
