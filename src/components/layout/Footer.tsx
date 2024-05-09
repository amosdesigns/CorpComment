export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">

      <small>
        <p>
          &copy; 1999 - {year}{" "}
          <a target="_blank" href="https://www.bfamcooking.com">
            BFAM Cooking
          </a>
        </p>
        <p>All rights for sample app. this is a fun typescript react app.</p>
      </small>
    </footer>
  );
}
