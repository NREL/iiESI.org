iiESI
=====

iiESI.org website


## Steps to push files to test and prod
1) Make sure your files are up to date.

```
moakley@moakley-25755s:/Volumes/websites/iiesidev on master
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
```

2) Make your changes on dev and push them to GHE.
```
moakley@moakley-25755s:/Volumes/websites/iiesidev on master*
$ git commit -a -m 'Added new cool widget to home page.'
...
$ git push
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 2.96 MiB | 1.03 MiB/s, done.
Total 5 (delta 3), reused 0 (delta 0)
To https://github.nrel.gov/communications/iiesi.git
   76fe0be..fa268f9  master -> master
```

3) Sync the changes with AWS

Test server:
```s3cmd sync /Volumes/websites/iiesidev/ s3://test.iiesi.org --acl-public --exclude ".git/*" --delete-removed --verbose```
Prod server:
```s3cmd sync /Volumes/websites/iiesidev/ s3://iiesi.org --acl-public --exclude ".git/*" --delete-removed --verbose```
