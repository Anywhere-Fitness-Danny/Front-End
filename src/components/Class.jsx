import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Constants
import { fakeData } from './../constants/fakeData';

// Redux imports
import { useSelector } from 'react-redux';

// Components
import Header from './Header';

// Styled components
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #444;
  background: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 87.7vh;
  position: relative;
`;

const CoverBottom = styled.div`
  background-color: rgb(192, 192, 192, 0.8);
  width: 100%;
  height: 87.7vh;
  position: absolute;
  z-index: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const CoverTop = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  width: 100%;
  height: 87.7vh;
  width: 60%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  width: 80%;
  height: auto;
  overflow: hidden;
  transition: all 0.2s ease;
  position: relative;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  width: 20em;
`

const CardImg = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 2px 2px 4px #444;
  border: 2px solid rgba(0, 0, 0, 0.3);

  &:hover {
    border: 2px solid #444;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Button = styled.div`
  border-radius: 30px;
  background-color: #3498DB;
  color: white;
  font-size: 1.1rem;
  width: 10%;
  padding: 1.5%;
  margin: 2%;

  &:hover {
    background-color: #444;
    color: #whitesmoke;
  }
`

const Class = () => {
  // Local state
  const [data, setData] = useState(null);
  const user = useSelector(state => state.user);
  const classes = useSelector(state => state.classes);
  const categories = useSelector(state => state.categories);

  // Grab the page id from the url
  const params = useParams();
  const id = params.id;

  // Get the category
  const findCategory = id => {
    const categoryToFind = categories.find(
      category => Number(category.id) === Number(id)
    );
    return categoryToFind;
  };

  useEffect(() => {
    // Get the class from state
    setData(classes.find(classObj => Number(classObj.id) === Number(id)));
  }, []);

  // Format the category
  const category = findCategory(data?.categoryId);
  const formattedCategory = category && category.name[0].toUpperCase() + category.name.slice(1);
  const classImg = fakeData.imgClasses[data?.id];

  return (
    <>
      <Header />
      <Wrapper>
        <CoverBottom>
          <CoverTop />
            <Card>
              <Row>
                <ImgWrapper>
                  {classImg && <CardImg src={`${classImg}`} alt={`image of a ${data.name} class`}/>}
                </ImgWrapper>
              </Row>
              <Row>
              <h2>{data?.title}</h2>
              <p>Instructor: #{data?.instructorId}</p>
              <p>Category: {formattedCategory}</p>
              {user && user.roleId === 1 ? <Button>Sign Up</Button> : null}
              </Row>
            </Card>
        </CoverBottom>
      </Wrapper>
    </>
  )
}

export default Class;
