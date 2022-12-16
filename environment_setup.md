## Environment Setup

##### Linux Setup

This project is intended to be used on a linux system, or a linux *subsystem*. ie., if you use windows you can install windows subsystem for linux (WSL). You can install it following this guide:

https://learn.microsoft.com/en-us/windows/wsl/about

Once it is installed you can shift-right-click on a directory to open a terminal there.

If you use a Mac or something else, you can still contribute to the project but in order to run anything you'd need to mirror all of these services locally, on your own. Alternatively, borrow a laptop from the library.

##### Git Setup

The version control system we used is git, hosted on github. If the next group continues to use git, it would be useful to setup a passwordless system to ease commits.

Because we're using WSL/Linux, you'll need to, within your linux system, generate an SSH key within /home/[user]/.SSH

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
clip < ~/.ssh/filename.pub
```

The second command copies the key to your clipboard, which you can then paste into your key settings on your github account. For more detail, see this guide:

https://docs.github.com/en/authentication/connecting-to-github-with-ssh

With that done you can just clone the repository in a location of your choosing. Then its just a matter of following typical git workflow; adding, committing, and pushing changes - keeping work on a dev branch before merging to main, and making pull requests from your personal fork to the project fork.

##### Python Environment

For this project you will need to install Python 3.8.10 and pip; other versions of python 3 may work if it's too difficult to bother updating.

Within the lastmiles-website directory, run:

```python
python3 -m venv ./apivenv
```

This will create a python virtual environment called apivenv, within your current directory.

We then want to activate this environment:

```bash
source apivenv/bin/activate
```

Then you can install all required libraries into this virtual environment.

```bash
pip install -r webAPI/requirements.txt
pip install "uvicorn[standard]"
```

##### React Setup

React requires Node.JS to run test servers and create production builds. Within WSL/Linux:

```bash
sudo apt-get install nodejs
```

To start up the website, go into lastmiles-website/stress-load and run the following command:

```bash
npm start
```

This will open an HTTP server at localhost:8000, accessible on your browser. Inspect element and go to the console tab to see more detailed debugging information.