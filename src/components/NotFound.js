import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div data-testid="not-found">
      <h2>Not Found 404 🙄</h2>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Back👈</Link>
    </div>
  )
}
