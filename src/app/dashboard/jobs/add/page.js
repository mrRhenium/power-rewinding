'use client';

import Image from 'next/image';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import styles from './add.module.css';
import { useRouter } from 'next/navigation';
import { showErrorToast, showSuccessToast } from '@/utils/toaster';
// import Button from '@/components/Button/Button';
import Link from 'next/link';

const AddUser = () => {
  const router = useRouter();

  const validationRules = {
    jobid: Yup.string()
      .max(120, 'jobid must not exceed 120 characters')
      .required('jobid is required'),
    clientName: Yup.string()
      .matches(
        /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        'Please enter a valid client number!'
      )
      .required('client number is required'),
  };

  const formik = useFormik({
    initialValues: {
      jobid: '',
      clientName: '',
    },
    validationSchema: Yup.object(validationRules),

    onSubmit: async (values) => {
      const obj =
      {
        jobid: values.jobid,
        clientName: values.clientName,
        role_id: values.role_id,
        password: values.password
      }
      try {
        const response = await fetch('/api/admin/users', {
          method: 'POST',
          body: JSON.stringify(obj),
        });

        const data = await response.json();

        if (data.code === 201) {
          showSuccessToast('New user created successfully!');
          router.push('/dashboard/jobs');
        } else {
          showErrorToast(
            data?.message?.issues[0]?.message || 'User creation error!'
          );
        }
      } catch (error) {
        // Handle login error
        showErrorToast('User creation error!');
      }
    },
  });

  return (
    <>
      <div className="section-body" style={{ width: "100%" }}>
        <div className='container-fluid'>
          <div className='tab-content'>
            <form onSubmit={formik.handleSubmit}>
              <div
                className='tab-pane fade show active'
                id='user-add'
                role='tabpanel'
              >

                <div className='card'>
                  <div className='card-header' style={{ padding: ".5rem" }}>
                    <h6 className="card-title"> ADD FOLDER </h6>
                  </div>
                  <div className='card-body'>
                    <div className='row'>

                      <div className='col-md-6 col-sm-12'>
                        <div className='form-group'>
                          <input
                            id='jobid'
                            jobid='jobid'
                            type='text'
                            className='form-control'
                            placeholder='Job Id *'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobid}
                            style={{ margin: '2% 0 2% 1%', fontSize: ".8rem" }}
                          />
                          {formik.touched.jobid && formik.errors.jobid ? (
                            <div className={styles.invalidDataError}>
                              {formik.errors.jobid}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6 col-sm-12'>
                        <div className='form-group'>
                          <input
                            id='clientName'
                            jobid='clientName'
                            type='text'
                            className='form-control '
                            placeholder='Client Name *'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.clientName}
                            style={{ margin: '2% 0 2% 1%', fontSize: ".8rem" }}
                          />
                          {formik.touched.clientName && formik.errors.clientName ? (
                            <div className={styles.invalidDataError}>
                              {formik.errors.clientName}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-12 text-end'>
                        <hr className='my-3' />
                        <Link href={`/dashboard/jobs`}>
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
                        </Link>
                        <button
                          type='submit'
                          id='button_2'
                          className='btn buttons'
                          style={{
                            backgroundColor: "var(--primary-color)",
                            color: '#ffffff',


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

export default AddUser;
