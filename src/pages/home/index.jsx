import React, { useEffect, useState } from 'react'
import { Banner } from '../../components/banner'
import { ClassCategories } from '../../components/class-categories'
import { getClasses } from '../../services/class';

export const Home = () => {
  const [classes, setClasses] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);

  useEffect(() => {
    getClasses()
      .then((data) => {
        console.log('data: ', data)
        setClasses(data);
      })
  }, [])

  return (
    <div>
        <Banner setClasses={setClasses} setHasSearch={setHasSearch} />
        <ClassCategories classes={classes} hasSearch={hasSearch} />
    </div>
  )
}
