import React from 'react';

// Lazy load remote components from module federation
const ArticlePage = React.lazy(() => import("ArticlePage/Articles"));
const CoursePage = React.lazy(() => import("CoursePage/Courses"));

// Export components for centralized imports
export { ArticlePage, CoursePage };
