import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookmarkService } from '../services/api';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [bookmarksRes, progressRes] = await Promise.all([
        bookmarkService.getBookmarks(),
        bookmarkService.getProgress().catch(() => ({ data: null }))
      ]);
      setBookmarks(bookmarksRes.data.data || []);
      setProgress(progressRes.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await bookmarkService.deleteBookmark(id);
      setBookmarks(bookmarks.filter(b => b.id !== id));
    } catch (error) {
      alert('Failed to delete bookmark');
    }
  };

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;

  return (
    <div className="home-container">
      <h2>🔖 My Bookmarks</h2>

      {progress && (
        <div className="card" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h3>Reading Progress</h3>
          <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{progress.completionPercentage}%</div>
          <p>Last read: Surah {progress.lastSurahNumber}, Verse {progress.lastVerseId}</p>
        </div>
      )}

      {bookmarks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔖</div>
          <h3>No Bookmarks Yet</h3>
          <p>Start reading the Quran and bookmark your favorite verses!</p>
          <Link to="/" className="btn btn-primary">Start Reading</Link>
        </div>
      ) : (
        bookmarks.map(bookmark => (
          <div key={bookmark.id} className="card" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ flex: 1 }}>
                {/* Surah and Verse Info */}
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {bookmark.verse?.surah?.name || `Surah ${bookmark.verse?.surahId}`} - Verse {bookmark.verse?.verseNumber}
                  </span>
                </div>

                {/* Arabic Text */}
                {bookmark.verse?.textArabic && (
                  <p style={{
                    fontSize: '1.5rem',
                    margin: '0.75rem 0',
                    direction: 'rtl',
                    fontFamily: '"Amiri", "Traditional Arabic", serif'
                  }}>
                    {bookmark.verse.textArabic}
                  </p>
                )}

                {/* Urdu Translation */}
                {bookmark.verse?.textUrdu && (
                  <p style={{ margin: '0.5rem 0', color: 'var(--text-color)' }}>
                    {bookmark.verse.textUrdu}
                  </p>
                )}

                {/* Note */}
                {bookmark.note && (
                  <p style={{
                    marginTop: '0.75rem',
                    padding: '0.5rem',
                    backgroundColor: 'var(--light-color)',
                    borderRadius: '4px',
                    fontStyle: 'italic'
                  }}>
                    📝 {bookmark.note}
                  </p>
                )}

                {/* Read Link */}
                <Link
                  to={`/surah/${bookmark.verse?.surahId || bookmark.verseId}`}
                  className="btn btn-outline-primary"
                  style={{ marginTop: '0.75rem', display: 'inline-block' }}
                >
                  📖 Read Full Chapter
                </Link>
              </div>

              <button
                onClick={() => handleDelete(bookmark.id)}
                className="btn btn-danger"
                style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}
                title="Delete bookmark"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
