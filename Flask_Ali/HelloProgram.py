from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/", methods=['GET','POST'])
def main():
    if request.method == 'GET':
        return render_template('personinfo.html')
    else:
        return GetInfo()
        
def GetInfo():
    global headings, data
    headings=("Course", "Teacher")
    course1=request.form.get('txtperiod1')
    teacher1=request.form.get('txtteacher1')
    course2=request.form.get('txtperiod2')
    teacher2=request.form.get('txtteacher2')

    data = (
        (course1, teacher1),
        (course2, teacher2)
        )
    return DisplayInfo()

def DisplayInfo():
    return render_template('index.html', headings=headings, data=data)


if __name__ == "__main__":
    app.run()
