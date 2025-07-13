import React, { useEffect, useState } from 'react';
import ForumSidebar from '../../components/ui/foroum-page/ForumSidebar';
import ForumPostButton from '../../components/ui/foroum-page/ForumPostButton';
import ForumDiscussions from '../../components/ui/foroum-page/ForumDiscussions';
import ForumTrending from '../../components/ui/foroum-page/ForumTrending';
import CreateForumModal from '../../components/ui/foroum-page/CreateForumModal';
import { createForum, getAllForums } from '../../services/forumServices';
import '../../components/ui/foroum-page/Forum.css';

const Foroums = () => {
  const [showModal, setShowModal] = useState(false);
  const [forums, setForums] = useState([]);

  const fetchForums = async () => {
    try {
      const res = await getAllForums();
      setForums(res.data);
    } catch (error) {
      console.error('Failed to fetch forums:', error);
    }
  };

  const handleCreate = async (data) => {
    try {
      await createForum(data);
      setShowModal(false);
      fetchForums();
    } catch (error) {
      console.error('Failed to create forum:', error);
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  return (
    <div className="forum-container">
      <ForumSidebar />
      <div className="forum-main">
        <ForumPostButton onClick={() => setShowModal(true)} />
        <ForumDiscussions forums={forums} />
      </div>
      <ForumTrending />
      {showModal && (
        <CreateForumModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
};

export default Foroums;
