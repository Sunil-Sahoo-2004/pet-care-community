import React, { useState } from 'react';
import './Knowledge.css';
import AddArticle from '../../components/ui/knowledge-page/AddArticle';
import ArticleList from '../../components/ui/knowledge-page/ArticleList';
import ArticleSidebar from '../../components/ui/knowledge-page/ArticleSidebar';
import KnowledgeHeader from '../../components/ui/knowledge-page/KnowledgeHeader';

const Knowledge = () => {
  const [refresh, setRefresh] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleArticleAdded = () => {
    setRefresh(!refresh);
    setShowModal(false);
  };

  return (
    <div className="knowledge-container">
      <div className="knowledge-header">
        <KnowledgeHeader />
      </div>

      {/* Modal for AddArticle */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <AddArticle onArticleAdded={handleArticleAdded} />
          </div>
        </div>
      )}

      <div className="knowledge-content">
        <div className="articles-section">
          <ArticleList refresh={refresh} />
        </div>
        <div className="sidebar-section">
          <ArticleSidebar onCreateClick={() => setShowModal(true)} />
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
