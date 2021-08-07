import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ken');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added');
            setIsSubmitting(false);
            history.push('/');
        });
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required autoComplete="off" />
                <label htmlFor="body">Blog body:</label>
                <textarea required id="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label htmlFor="authors">Blog Author:</label>
                <select id="authors" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ken">Ken</option>
                    <option value="Kenmoh">Kenmoh</option>
                </select>
                {!isSubmitting && <button>Add Blog</button>}
                {isSubmitting && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default Create;