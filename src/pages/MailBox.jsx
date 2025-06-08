import React, { useEffect, useState } from "react";
import data from "../data/data.js";
import { MdDelete } from "react-icons/md";

function MailBox() {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [newMails, setNewMails] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selectedMail.includes(id)) {
      // zaten seçiliyse çıkar
      setSelectedMail(selectedMail.filter((mailId) => mailId !== id));
    } else {
      // seçili değilse ekle
      setSelectedMail([...selectedMail, id]);
    }
  };

  //!Silme işlemi
  const handleDelete = () => {
    setMails(mails.filter((mail) => !selectedMail.includes(mail.id)));
    setSelectedMail([]); // silince seçili mail listesi temizlenmeli
  };

  useEffect(() => {
    setMails(data);
  }, []);

  //!Search İşlemi
  useEffect(() => {
    filteredMails();
  }, [searchInput, mails]);

  const filteredMails = () => {
    const res = mails.filter((mail) => {
      return mail.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setNewMails(res);
  };

  return (
    <div className="flex bg-gray-800 text-white w-full min-h-screen">
      <div className="flex flex-col w-full">
        <main className="flex flex-col flex-grow px-10 py-8 items-center">
          <h1 className="text-cyan-400 text-5xl font-extrabold mb-10 drop-shadow-[0_0_10px_rgba(0,212,255,0.7)]">
            MailBox
          </h1>

          <input
            type="text"
            className="block mx-auto w-[200px] px-4 py-2 rounded-lg bg-gray-800 border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white mb-5"
            placeholder="Find sender..."
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <div className="w-full max-w-5xl overflow-x-auto rounded-lg border border-cyan-600 shadow-lg">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-cyan-700 text-white">
                <tr>
                  <th className="px-4 py-2">
                    <MdDelete
                      className=" text-2xl text-red-700 cursor-pointer"
                      onClick={handleDelete}
                    />
                  </th>
                  <th className="px-6 py-3">Sender</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {newMails.map((mail) => (
                  <tr
                    key={mail.id}
                    className="even:bg-gray-900 odd:bg-gray-800 hover:bg-cyan-900 transition-colors"
                  >
                    <td>
                      <input
                        type="checkbox"
                        className="ml-5"
                        onChange={() => handleCheckboxChange(mail.id)}
                      />
                    </td>
                    <td className="px-6 py-4">{mail.title}</td>
                    <td className="px-6 py-4">{mail.description}</td>
                    <td className="px-6 py-4">{mail.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MailBox;
