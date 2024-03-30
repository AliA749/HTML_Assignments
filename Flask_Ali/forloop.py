from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST']) 
def main():
    if request.method == 'POST':#post in all caps
        return render_template('indexfor.html') #if we arent getting then we are posting so we get this page
    else:
        return MainScreen() #mainscreen() is here becuase we are getting the values

def MainScreen():
    mylist=[]
    mylist = ["Math", "Science", "English", "History", "Software Engineering"]
    mylistlen = len(mylist)
    return render_template('forloopintro.html', mylist=mylist, mylistlen=mylistlen)#return the values to html

if __name__ == "__main__":
    app.run()

        
        
