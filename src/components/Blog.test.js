import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

test("Checks if Blog displays title and author but not url and likes", () => {
  const blog = {
    author: "Nasir",
    title: "Testing 101",
  };

  const component = render(<Blog blog={blog} />);

  expect(component.container).toHaveTextContent("Nasir");

  const title = component.container.querySelector(".title");
  expect(title).toHaveTextContent("Testing 101");
  expect(component.container.querySelector(".author")).toHaveTextContent(
    "Nasir"
  );
  expect(component.container.querySelector(".likes")).toHaveTextContent("");
  expect(component.container.querySelector(".url")).toHaveTextContent("");
});

describe("Testing the display of blog details", () => {
  let component;
  beforeEach(() => {
    const blog = {
      author: "Nasir",
      title: "Testing 101",
      url: "http://test.com",
      likes: 10,
    };

    component = render(<Blog blog={blog} />);
  });

  test("render its children", () => {
    expect(component.container.querySelector(".blog")).toBeDefined();
  });
  test("Checks if the url and likes are shown when the 'shown' button is clicked", () => {
    const body = component.container.querySelector(".blogDetail");
    expect(body).toHaveStyle("display:none");
  });

  test("After clicking view, blog details are shown", () => {
    const button = component.getByText("view");
    fireEvent.click(button);
    const body = component.container.querySelector(".blogDetail");
    expect(body).not.toHaveStyle("display:none");
  });
});
describe("Testing if the like button is clicked twice", () => {
  const blog = {
    author: "Nasir",
    title: "Testing 101",
    url: "http://test.com",
    likes: 10,
    user: "12",
  };

  test("If the prop function is clicked twice", () => {
    const mochHanlder = jest.fn();
    const component = render(<Blog blog={blog} updateBlog={mochHanlder} />);
    const likeBtn = component.getByText("like");
    fireEvent.click(likeBtn);
    fireEvent.click(likeBtn);
    expect(mochHanlder.mock.calls).toHaveLength(2);
  });
});

describe("Teting blog form", () => {
  test("Add a blog", () => {
    const createBlog = jest.fn();
    const component = render(<BlogForm addBlog={createBlog} />);

    const title = component.container.querySelector(".title");
    const url = component.container.querySelector(".url");
    const author = component.container.querySelector(".author");
    const form = component.container.querySelector(".blogForm");

    fireEvent.change(title, {
      target: {
        value: "Testing form",
      },
    });

    fireEvent.change(url, {
      target: {
        value: "http://nas",
      },
    });

    fireEvent.change(author, {
      target: {
        value: "Nasir",
      },
    });

    fireEvent.submit(form);

    expect(createBlog.mock.calls).toHaveLength(1);
    expect(createBlog.mock.calls[0][0].title).toBe("Testing form");
    expect(createBlog.mock.calls[0][0].author).toBe("Nasir");
    expect(createBlog.mock.calls[0][0].url).toBe("http://nas");
  });
});
