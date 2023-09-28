class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }

    connectedCallbacks(){
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector('#searchInput').value;
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        .search-box {
            text-align: center;
            margin-top: 40px;
        }

        .search-box > input {
            width: 80%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        .search-box > input:focus {
            outline: 0;
            border-bottom: 2px solid black;
          }

        .search-box > input:focus::placeholder {
            font-weight: bold;
          }
          
        .search-box >  input::placeholder {
            color: black;
            font-weight: normal;
          }

        .search-box > button {
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
        }

        @media screen and (max-width: 550px){
            .search-box{
                flex-direction: column;
            }
            .search-box > input {
                width: 100%;
                margin-bottom: 12px;
            }

            .search-box > button {
                width: 100%;
            }
        }
        </style>

        <div class="search-box">
            <h2>Search Drink</h2>
            <input id="searchInput" placeholder="What is your favorite drink..." type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);