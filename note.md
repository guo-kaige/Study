```shell
# 把一个文件拆分成多个指定大小的文件
split -b 100M -d mydir.tar.gz mydir
# opensuse 安装 obdc
zypper install unixODBC unixODBC-devel
# opensuse 安装 C++ 编译器
zypper install -t pattern devel_basis
```

```shell
# 把一个目录初始化为Git仓库
git init

# add file to staging area
git add file.txt

# load certain commit id
git checkout b7391ac72a6279984ecf08f61110b8434e8ab07c

# switch to master branch
git checkout master

# create new branch
git branch kaige
# switch branch
git ckeckout kaige

# create new branch and switch to new branch
git checkout -b kaige

# merge commit from third-branch to current branch
git merge third-branch
# switch branch
git switch third-branch
# create and switch branch
git switch -c fourth-branch
# list files in staging area
git ls-files
# remove file in staging area
git rm working-with-branchs.txt
# checkout a file to current branch head
git checkout initial-commit.txt
# checkout a file to current branch head
git restore initial-commit.txt
# list all untracked files
git clean -dn
# remove untracked files
git clean -df
# cancel git add status
git reset second-commit.txt
git restore --staged second-commit.txt
# delete the last commit
git reset --soft HEAD~1
# delete the last commit and the last add
git reset HEAD~1
# delete the last commit and the last add and the last change
git reset --hard HEAD~1
# force to delete branch
git branch -D fourth-branch
git branch -D kaige third-branch
# create a new branch using detached head 
# 也可以在detach head mode下，add / commit，然后创建一个新的分支，然后切换到master分支，再merge新分支
git branch detached-head f0fd429
# .gitignore

# git stash
git stash
git stash apply 0
git stash list
git stash push -m "instructions"
git stash pop 0
git stash drop 0
git stash clear

# git reflog
git reflog
git reset --hard 2415816

# 如何恢复被删除的branch
git reflog		# 查找被删除branch的最后一次commit
git checkout c745e99 # 恢复最后一次commit到detached head mode
git switch -c feature # 恢复到branch

# fast-forward merge
# No additional commit in master branch (after feature branch created)

# add features commit to master. but not commit, need a commit
git merge --squash feature

# recursive merge
git merge --no-ff feature

git merge --abort
git log --merge

git tag 1.0 cf2b8306a53cc051b5683481dfb10ccf3d0610c2
git tag
git show 1.0
git checkout 1.0
git tag -d 1.0
git tag -a 2.0 -m "This is the latest version"

# link local repo to GitHub repo
git remote add origin https://github.com/guo-kaige/Study.git
git push origin master 

# list branch
git branch
git branch -a
git branch -r
git ls-remote
git fetch origin

git branch --track feature-remote-local origin/feature-remote
git branch -vv

git remote
git remote show origin
git clone git@github.com:guo-kaige/Study.git



git config --global credential.helper manager
```

