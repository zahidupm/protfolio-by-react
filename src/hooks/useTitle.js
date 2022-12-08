import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Zahid Hasan`
    }, [title])
}

export default useTitle;