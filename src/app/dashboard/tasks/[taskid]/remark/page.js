'use client';

import { showErrorToast, showSuccessToast } from '@/utils/toaster';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Remark = () => {
  const [comment, setComment] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      showErrorToast('Please enter a comment.');
      return;
    }

    setComment(''); // Clear the comment input after submission
    showSuccessToast('Comment uploaded successfully!'); // Provide feedback
  };

  return (
    <>
      <div className="section-body" style={{ width: "100%" }}>
        <div className='container-fluid'>
          <div className='tab-content'>
            <form onSubmit={handleSubmit}>
              <div
                className='tab-pane fade show active'
                id='user-add'
                role='tabpanel'
              >
                <div className='card'>
                  <div className='card-header' style={{ padding: ".5rem" }}>
                    <h6 className="card-title"> REMARK </h6>
                  </div>
                  <div className='card-body'>
                    <div className='row' style={{ margin: "0" }}>
                      <div className='col-md-6 col-sm-12' style={{ margin: "0" }}>
                        <div className="form-group"
                          style={{ width: "100%", marginLeft: ".5rem" }}>
                          <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="form-control"
                            placeholder="Enter your remark"
                            style={{ height: '150px' }} // Adjust height as needed
                          />
                        </div>
                      </div>

                      <div className='col-12 text-end'>
                        <hr className='mt-3 mt-1' />

                        <button
                          type='button'
                          id='button_1'
                          className='btn btn-secondary mx-1 buttons'
                          data-dismiss='modal'
                          style={{
                            backgroundColor: "var(--button-color)",
                          }}
                        >
                          CLOSE
                        </button>

                        <button
                          type='submit'
                          id='button_2'
                          className='btn buttons'
                          style={{
                            backgroundColor: "var(--primary-color)",
                            color: '#ffffff'
                          }}
                        >
                          SUBMIT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remark;
