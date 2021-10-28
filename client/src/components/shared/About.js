import { Icon } from "semantic-ui-react";
import styled from "styled-components";
const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "Verdana", fontSize: "3em", color: "#122546" }}>
        About Us
      </h1>
      <Container>
        <StudentCard>
          <img src="https://picsum.photos/350" alt="tyler-img" />
          <hr />
          <p
            style={{
              padding: "0 10px 0 10px",
            }}
          >
            Tyler is super awesome! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec interdum ex sit amet ex mollis, ut tincidunt
            urna tincidunt. Mauris diam purus, varius sed sapien vitae,
            fringilla fermentum neque.
          </p>
          <IconGroup>
            <a href="">
              <Icon name="linkedin" />
            </a>{" "}
            <a href="">
              <Icon name="github" />
            </a>
          </IconGroup>
        </StudentCard>
        <StudentCard>
          <img src="https://picsum.photos/350" alt="collin-img" />
          <hr />

          <p
            style={{
              padding: "0 10px 0 10px",
            }}
          >
            Collin is super awesome! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec interdum ex sit amet ex mollis, ut tincidunt
            urna tincidunt. Mauris diam purus, varius sed sapien vitae,
            fringilla fermentum neque.
          </p>
          <IconGroup>
            <a href="">
              <Icon name="linkedin" />
            </a>{" "}
            <a href="">
              <Icon name="github" />
            </a>
          </IconGroup>
        </StudentCard>
        <StudentCard>
          <img src="https://picsum.photos/350" alt="davonda-img" />
          <hr />

          <p
            style={{
              padding: "0 10px 0 10px",
            }}
          >
            Davonda is super awesome! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec interdum ex sit amet ex mollis, ut tincidunt
            urna tincidunt. Mauris diam purus, varius sed sapien vitae,
            fringilla fermentum neque.
          </p>
          <IconGroup>
            <a href="">
              <Icon name="linkedin" />
            </a>{" "}
            <a href="">
              <Icon name="github" />
            </a>
          </IconGroup>
        </StudentCard>
        <StudentCard>
          <img src="https://picsum.photos/350" alt="damian-img" />
          <hr />

          <p
            style={{
              padding: "0 10px 0 10px",
            }}
          >
            Damian is super awesome! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec interdum ex sit amet ex mollis, ut tincidunt
            urna tincidunt. Mauris diam purus, varius sed sapien vitae,
            fringilla fermentum neque.
          </p>
          <IconGroup>
            <a href="">
              <Icon name="linkedin" />
            </a>{" "}
            <a href="">
              <Icon name="github" />
            </a>
          </IconGroup>
        </StudentCard>
        <StudentCard>
          <img src="https://picsum.photos/400" alt="kevin-img" />
          <hr />

          <p
            style={{
              padding: "0 10px 0 10px",
            }}
          >
            Kevin is super awesome! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec interdum ex sit amet ex mollis, ut tincidunt
            urna tincidunt. Mauris diam purus, varius sed sapien vitae,
            fringilla fermentum neque.
          </p>
          <IconGroup>
            <a href="">
              <Icon name="linkedin" />
            </a>{" "}
            <a href="">
              <Icon name="github" />
            </a>
          </IconGroup>
        </StudentCard>
      </Container>
    </div>
  );
};
export default About;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StudentCard = styled.div`
  height: 625px;
  width: 700px;
  margin: 60px;
  color: #122546;
  font-family: "Verdana";
  font-size: 1.5em;
  background-color: #e6e6e8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  p {
    overflow-wrap: break-word;
  }
`;
const IconGroup = styled.div`
  font-size: 1.5em;
  a {
    color: #e34b36;
  }
  a:hover {
    text-decoration: none;
    color: #9c3224;
  }
`;