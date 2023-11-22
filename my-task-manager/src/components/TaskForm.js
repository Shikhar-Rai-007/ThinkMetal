import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Title is required').max(50, 'Title must be at most 50 characters'),
  description: yup.string().required('Description is required').max(200, 'Description must be at most 200 characters'),
  dueDate: yup.date().nullable().required('Due date is required').min(new Date(), 'Due date must be in the future'),
  priority: yup.string().required('Priority is required').oneOf(['low', 'medium', 'high'], 'Invalid priority'),
  status: yup.string().required('Status is required').oneOf(['done', 'undone'], 'Invalid status'),
});

const TaskForm = ({addTask}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission (data is validated)
    addTask(data); // Process validated data, e.g., save to state or submit to server
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-8 lg:p-12">
      <input {...register('title')} className="border rounded-lg p-2 mb-4 w-full" />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      {/* Other form fields with Tailwind CSS classes */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;