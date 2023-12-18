import React from "react";
import { MdLibraryBooks } from "react-icons/md";

function TopicsPage() {
  return (
    <>
      <h2>
        <i>
          <MdLibraryBooks className="iconSpacing" />
        </i>
        Web Dev Concepts
      </h2>
      <nav class="local">
        <a href="#servers">Web Servers</a>
        <a href="#design">Frontend Design</a>
        <a href="#images">Optimizing Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#css">Cascading Stylesheets</a>
        <a href="#javascript">JavaScript</a>
      </nav>
      <article id="servers">
        <h3>Web Servers</h3>
        <p>
          In relation to websites and servers, <strong>index</strong> often
          refers to the homepage of a <strong>web server</strong>. The index is
          also known as the <strong>designated homepage</strong>. When the
          <strong>path to the resource</strong> is a "/" or empty, usually the
          index.html file in the root directory is called. OSU's
          <strong>Apache</strong> web server also uses index.html as the default
          homepage. However, other servers may use different file names, such as
          default.html for <strong>Microsoft's</strong> .NET platform or
          index.js or index.php.
        </p>
        <p>
          The browser's Inspector Network tab displays
          <strong>Request Headers</strong>, <strong>Response Headers</strong>,
          and General Information. The General tab includes the
          <strong>Request URL</strong>, <strong>Request Method</strong>,
          <strong>Status Code</strong>, and Referrer Policy. This index.html
          document uses a <strong>GET request</strong> method and receives a
          status code <strong>200 OK</strong>, which means the file is found.
          One difference between viewing files locally and the web server is
          that the General tab includes the Remote Address for the web server.
          Generally, viewing a file on the web server will provide more
          information than viewing a file locally.
        </p>
        <p>
          In the web server, favicon.ico is located inside the root directory
          for the student's public_html folder. The file receives a status 200
          because it is found. However, the files main.css and main.js are not
          yet created and are not found in the root directory. Therefore, they
          both receive a status <strong>404 Not Found</strong>.
        </p>
        <p>
          The <strong>URL</strong>,
          "https://web.engr.oregonstate.edu/~yusimo/a1-yusimo/", can be
          separated into the following parts: scheme, subdomain, host domain and
          resources. The <strong>scheme</strong> is "https", which means it is a
          secure connection. The <strong>subdomain</strong> is "web" and "engr",
          which are the servers that host the website. The
          <strong>host domain</strong> is "oregonstate.edu", which is includes
          the <strong>extension</strong>, "edu". The
          <strong>name of the resource</strong> is "/~yusimo/a1-yusimo/", which
          is accessing the index.html file at the "a1-yusimo" directory inside
          the "yusimo"'s public_html folder.
        </p>
      </article>
      <article id="design">
        <h3>Frontend Design</h3>
        <p>
          Although trends in <strong>frontend design</strong> are frequently
          changing, the purpose remains the same. Frontend design focuses on
          creating the most appropriate user experience using the visual design
          of a page, the graphical user-interface (GUI), and the interactive
          experience. A good visual design requires consistent color, font,
          typography, and illustration schemes. In addition, visual design
          should also include appropriate photography, icons, and navigation
          systems. There are a few factors that affect the user's experience.
          These factors, also known as "Five 'E's", are combined to measure the
          product's <strong>usability</strong>.
        </p>
        <h4>Five "E"s:</h4>
        <dl>
          <dt>
            <strong>Effective</strong>
          </dt>
          <dd>
            The product should help users meet their goal(s) with accurate
            results.
          </dd>
          <dt>
            <strong>Efficient</strong>
          </dt>
          <dd>
            Users should be able to quickly execute tasks in the least number of
            steps.
          </dd>
          <dt>
            <strong>Easy to Navigate</strong>
          </dt>
          <dd>
            New users should be able to immediately understand where to click or
            what to search to reach their goal(s).
          </dd>
          <dd>
            Layout design and navigation should be easy for users to remember
            when they revisit.
          </dd>
          <dt>
            <strong>Error-Free</strong>
          </dt>
          <dd>
            The product should have minimal errors to reduce accessibility and
            availability issues that may hinder the users from achieving their
            goals.
          </dd>
          <dd>
            Understanding common errors that users create decreases the risk of
            a roadblock caused by an error.
          </dd>
          <dt>
            <strong>Enjoyable</strong>
          </dt>
          <dd>
            Ideally, the users should find that the product's content and design
            provide an engaging overall experience that would entice them to
            return.
          </dd>
        </dl>
        <h4>Page Layout Tags</h4>
        <p>
          <strong>Page-layout tags</strong>, also known as
          <strong>block-level</strong> elements, separate the flow of content.
          Browsers usually display these tags with a<strong>newline</strong>{" "}
          before and after the tag. The
          <strong>header element</strong> is typically a banner that stays
          consistent on each page. The header frequently includes the name,
          publisher, and slogan. The <strong>nav element</strong> is a
          navigation block that contains links to other sections or pages. An
          app or site can contain multiple nav elements. The
          <strong>main element</strong> is a block that holds the key content.
          There are several elements that can go inside the main block.
          <strong>Section elements</strong> are used to group related content
          together and often have a heading to classify the content. Groups of
          related content are typically separated into
          <strong>article elements</strong> that contain a particular topic.
          <strong>Aside elements</strong> are used to float related text content
          on the right or left side of the page.
          <strong>Figure elements</strong> are used to float media content and
          oftentimes include a caption.
          <strong>Blockquote elements</strong> differ from paragraph tags
          visually and are used to quote text from another source. The
          <strong>footer element</strong> occupies the space at the bottom of
          the page and typically contains legal information, contact
          information, and links to external pages. Finally, the
          <strong>div element</strong> is a generic block that can be used to
          group content together if no other tags are appropriate.
        </p>
        <p>
          The <strong>anchor element</strong> allows creation of hyperlinks from
          one page to another. Anchor tags use the
          <strong>href attribute</strong> to specify the destination of the
          link. Destinations include:
        </p>
        <ol>
          <li>
            <strong>External Content</strong> – The href attribute holds the
            full URL or <strong>absolute path</strong> of the destination.
          </li>
          <li>
            <strong>Internal Content</strong> – Items on the same page use
            <strong>IDs</strong>. The href attribute holds a hashtag followed by
            the ID of the destination.
          </li>
          <li>
            <strong>Page-to-page</strong> – The href attribute holds the
            <strong>relative path</strong> to the destination.
          </li>
        </ol>
      </article>
      <article id="images">
        <h3>Optimizing Images</h3>
        <p>
          There are six specifications to determine if an image is optimized for
          the web. The first is having a<strong>descriptive file name</strong>,
          which means the name should include details and answer as much as
          possible. This helps search engine bots categorize related images and
          improve search engine optimization (SEO). Another specification is
          having a<strong>small file size</strong>. Compressing images to as
          small as possible will result in faster load times, which will improve
          user's experience. In addition to having a small file size, cropping
          and reducing the size of images to
          <strong>exact dimensions</strong> will also improve load times.
          Depending on what the image is, saving it in the
          <strong>correct file format</strong> will produce better quality
          results. Photos are usually saved in .JPG or .WebP to preserve all the
          details and colors. Line-art images are typically saved in .GIF, .SVG,
          or 8-bit .PNG, which will render better quality for two-dimensional
          images with solid colors and shapes. Images with true transparency
          graphics are saved in 24-bit .PNG. The file format is used to
          determine the correct <strong>color mode</strong>. RGB is used for
          .JPG, .SVG, .PNG, and .WebP. Indexed is used for .GIF and sometimes
          .PNG. The color mode and
          <strong>reduced resolution</strong> are important for consistency
          across devices. As technology advances, it is essential to have
          varying sizes and resolutions of images to serve both newer monitors
          that can render higher resolutions and older ones that lack rendering
          power.
        </p>
      </article>
      <article id="favicons">
        <h3>Favicons</h3>
        <p>
          Browsers and devices display favicons for users to quickly recognize
          the site or app. Favicons, also known as favorites icons or touch
          icons, are files that contain the company logo. These files are saved
          in .GIF, .ICO, .PNG, and .SVG file formats. To be optimized, favicon
          files contain different sizes of the image. The different sizes are
          used to fit varying device widths. Browsers display the favicon in the
          browser tabs. Devices use favicons to represent the website or app on
          the home screen.
        </p>
      </article>
      <article id="css">
        <h3>Cascading Style Sheets</h3>
        <p>
          <strong>Cascading Style Sheets (CSS)</strong> are used to override the
          default HTML styles. This allows developers to integrate consistent
          branding colors and styles for all devices. CSS is used to change the
          presentation of content by adjusting sizes, colors, fonts, etc. These
          adjustments should also improve a website's readability and usability.
          Styles highlight important content and help users understand what
          actions may be available, bringing the webpage to life.
        </p>
        <p>
          There are five ways to incorporate styles. The preferred and most
          efficient method is to use external CSS. HTML files use the
          <strong>link tag</strong> to connect with the CSS file. External CSS
          allows developers to separate styling from markup, avoiding cluttering
          the HTML file. However, styles can also be incorporated directly in
          HTML. The <strong>style tag</strong> embeds style selectors with new
          attribute values. Developers might use this method if a page requires
          small adjustments. In addition, styles can also be incorporated within
          an element. The element can set the style equal to an attribute and
          value. This method is useful for incorporating one style change for an
          element. The last two ways to incorporate style involve{" "}
          <strong>JavaScript</strong>. Developers can use JavaScript template
          literals inside functions to change the value of an element. The final
          method is to use the
          <strong>Document Object Model (DOM)</strong>, which targets specific
          elements and gives them a new style.
        </p>
      </article>
      <article id="javascript">
        <h3>JavaScript</h3>
        <p>
          <strong>JavaScript</strong> is an interpreted language with various
          data types. It stores integers and floating point numbers both as a
          number. JavaScript can also store a value as a Boolean (true or
          false), a string, a symbol, or a special value (undefined and null).
          When a variable is declared, but not initialized, the variable has an
          undefined value. The last main data type in JavaScript is an
          <strong>object</strong>.
        </p>
        <p>
          Objects in JavaScript are a set of
          <strong>key-value pairs</strong> or <strong>properties</strong>.
          Objects allow four actions on its properties. These actions are
          creating, reading, updating, and deleting (<strong>CRUD</strong>). The{" "}
          <strong>dot operator</strong> in a variable's assignment statement is
          used to both create or update the object's property. In addition, the
          dot operator and the
          <strong>bracket operator</strong> are used to read properties of an
          object. Finally, the <strong>delete operator</strong> is used to
          delete properties. JavaScript represents arrays as objects. The
          array's property names are the strings values of the index. Arrays can
          perform the same CRUD operations as an object, along with some built
          in methods. These methods include push, pop, length, etc. In order for
          JavaScript to communicate the information its arrays and objects hold,
          the properties need to be converted to JavaScript Object Notation (
          <strong>JSON</strong>). There are two methods, JSON.stringify() and
          JSON.parse(), to convert back and forth from a JSON string to a
          JavaScript object.
        </p>
        <p>
          JavaScript performs <strong>conditionals</strong> similar to most
          other programming languages. This includes simple
          <strong>if-then-else statements</strong>
          as well as switch statements to handle conditionals. JavaScript also
          has a <strong>conditional, or ternary, operator (?)</strong>
          that allows a condition to be evaluated in a single line of code. The
          syntax is "condition expression ? firstExpression : secondExpression",
          which is a cleaner way of performing if-then functionality. However,
          JavaScript has automatic type conversion, which can lead to some
          confusion when performing equality operations. There are two sets of
          equality operators, one checks for "strict" equality and the other is
          "loose" equality. Loose equality uses type conversion, which means a
          string representation of a number and the number would be considered
          equal. This may lead to errors, so it is important to use strict
          equality operations (=== and !==).
        </p>
        <p>
          There are five types of ways to iterate in JavaScript. The first is a{" "}
          <strong>while loop</strong>, which evaluates an expression and then
          executes the body if the expression is true. This process is repeated
          until the expression evaluates to false. There is another while loop,
          called a <strong>"do while" loop</strong>. This while loop executes a
          statement first, then evaluates the expression for a true response
          before continuing. There are three types of for loops. One is a
          regular <strong>for loop</strong> that executes a specified amount of
          times based on the for statement. The for statement includes an
          initializing statement, a loop condition, and a repeating statement.
          Another way to use a for loop is
          <strong>"for of"</strong>, which can be used to iterate over an
          iterable value. For of loops can iterate over a string or an array,
          and access each element. The loop statement includes a declaration of
          a variable to represent each element in the string or array. The final
          type of for loop is a <strong>"for in"</strong> loop. This loop is
          used to iterate over an object's properties or keys.
        </p>
        <p>
          JavaScript is an
          <strong>object-oriented programming</strong> language, which means the
          language is built around objects, or data, instead of functions and
          logic. Classes are templates for creating objects and objects are
          instances of classes. JavaScript also allows
          <strong>functional programming</strong>, providing powerful features.
          Functions can be assigned to variables, functions can receive other
          functions as arguments, and functions can return other functions.
        </p>
      </article>
    </>
  );
}

export default TopicsPage;
